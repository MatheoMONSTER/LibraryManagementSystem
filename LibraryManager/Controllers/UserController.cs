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

        public UserController(LibraryDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _dbContext.Users.Add(user);
                    await _dbContext.SaveChangesAsync();
                    return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }

            else
            {
                return BadRequest(ModelState);
            }
        }

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

                //return NoContent();
                return Content("User deleted successfully!");
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);  
            }
        }
    }
}
