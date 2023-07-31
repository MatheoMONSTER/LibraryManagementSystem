using LibraryManager.BusinessLogic;
using LibraryManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly LibraryDbContext _dbContext;
        private readonly RegisterUserLogic _registerLogic;

        public UserController(LibraryDbContext dbContext)
        {
            _dbContext = dbContext;
            _registerLogic = new RegisterUserLogic(_dbContext);
        }

        //[HttpPost]
        //public async Task<IActionResult> Create([FromBody] User user)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        try
        //        {
        //            _dbContext.Users.Add(user);
        //            await _dbContext.SaveChangesAsync();
        //            return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
        //        }
        //        catch (Exception ex)
        //        {
        //            return BadRequest(ex.Message);
        //        }
        //    }

        //    else
        //    {
        //        return BadRequest(ModelState);
        //    }
        //}

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            try
            {
                var user = await _dbContext.Users.FindAsync(id);
                if(user == null)
                {
                    return NotFound();
                }
                return Ok(user);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                var users = await _dbContext.Users.ToListAsync(); 
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                var user = await _dbContext.Users.FindAsync(id);
                if (user == null)
                {
                    return NotFound();
                }

                _dbContext.Users.Remove(user);
                await _dbContext.SaveChangesAsync();

                return Content("User deleted successfully!");
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);  
            }
        }

        [HttpPut("{id}")] 
        public async Task<IActionResult> UpdateUser(int id, [FromBody] User user)
        {
            try
            {
                var existingUser = await _dbContext.Users.FindAsync(id); 
                if(existingUser == null)
                {
                    return NotFound(); 
                }
                existingUser.Username = user.Username;
                existingUser.Email = user.Email;

                await _dbContext.SaveChangesAsync();
                return Content("User updated successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult Register(User user)
        {
            if (ModelState.IsValid)
            {
                if (_registerLogic.RegisterUser(user.Username, user.FirstName, user.LastName, user.Email, user.Password))
                {
                    return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
                }
                else
                {
                    ModelState.AddModelError("Email", "This email is already taken");
                    return BadRequest(ModelState);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}
