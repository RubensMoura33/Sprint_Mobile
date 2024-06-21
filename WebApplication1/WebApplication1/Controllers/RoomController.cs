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
    public class RoomController : ControllerBase
    {
        private IRoomRepository? _roomRepository;

        public RoomController()
        {
            _roomRepository = new RoomRepository();
        }

        [HttpPost]
        public IActionResult Post(Room room)
        {
            try
            {
                _roomRepository!.Post(room);
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
                return Ok(_roomRepository!.Get());
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, Room room)
        {
            try
            {
                _roomRepository!.Put(id, room);
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
                _roomRepository!.Delete(id);
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }
    }
}
