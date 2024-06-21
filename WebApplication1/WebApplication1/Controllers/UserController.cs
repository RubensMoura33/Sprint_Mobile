using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Domains;
using WebApplication1.Interfaces;
using WebApplication1.Repositories;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UserController : ControllerBase
    {
        private IUserRepository? _userRepository;

        public UserController()
        {
            _userRepository = new UserRepository();
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            try
            {
                _userRepository!.Post(user);
                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpGet]

        public IActionResult Get()
        {
            try
            {
                return Ok(_userRepository!.Get());
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, User user)
        {
            try
            {
                _userRepository!.Put(id, user);
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _userRepository!.Delete(id);
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }
    }
}
