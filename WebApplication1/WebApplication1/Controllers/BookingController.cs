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
    public class BookingController : ControllerBase
    {
        private IBookingRepository? _bookingRepository;

        public BookingController()
        {
            _bookingRepository = new BookingRepository();
        }

        [HttpPost]
        public IActionResult Post(Booking booking)
        {
            try
            {
                _bookingRepository!.Post(booking);
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
                return Ok(_bookingRepository!.Get());
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, Booking booking)
        {
            try
            {
                _bookingRepository!.Put(id, booking);
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
                _bookingRepository!.Delete(id);
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }
    }
}
