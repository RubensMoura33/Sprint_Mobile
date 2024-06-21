using WebApplication1.Domains;

namespace WebApplication1.Interfaces
{
    public interface IRoomRepository
    {
        List<Room> Get();

        void Post(Room Room);

        void Delete(Guid id);

        void Put(Guid id, Room Room);
    }
}
