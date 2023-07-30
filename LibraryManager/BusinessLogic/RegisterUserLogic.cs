using LibraryManager.Models;
using System.Runtime.Intrinsics.Arm;
using System.Security.Cryptography;
using System.Text;

namespace LibraryManager.BusinessLogic
{
    public class RegisterUserLogic
    {
        private readonly LibraryDbContext _context;

        public RegisterUserLogic()
        {
        }

        public RegisterUserLogic(LibraryDbContext context)
        {
            _context = context;
        }

        public bool IsEmailUnique(string email)
        {
            return !_context.Users.Any(u => u.Email == email);
        }

        public bool RegisterUser(string username, string firstName, string lastName, string email, string password)
        {
            if(IsEmailUnique(email))
            {
                var hashedPassword = HashPassword(password);

                var newUser = new User
                {
                    Username = username,
                    FirstName = firstName,
                    LastName = lastName,
                    Email = email,
                    Password = hashedPassword
                };

                _context.Users.Add(newUser);
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        private string HashPassword(string password)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(password));
                
                StringBuilder builder = new StringBuilder();
                for(int i =0; i< bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }

                return builder.ToString();
            }
        }
    }
}
