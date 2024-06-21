using WebApplication1.Domains;

namespace WebApplication1.Interfaces
{
    public interface IUserRepository
    {
        List<User> Get();

        void Post(User user);

        void Delete(Guid id);

        void Put(Guid id, User user);
    }
}
