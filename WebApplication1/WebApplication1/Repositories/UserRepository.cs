using WebApplication1.Context;
using WebApplication1.Domains;
using WebApplication1.Interfaces;

namespace WebApplication1.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly PjContext _context;
        public UserRepository()
        {
            _context = new PjContext();
        }
        public void Delete(Guid id)
        {
            User userSearched = _context!.Users.Find(id)!;
            _context.Users.Remove(userSearched);
            _context.SaveChanges();
        }

        public List<User> Get()
        {
            return _context!.Users.ToList();
        }

        public void Post(User user)
        {
            _context!.Users.Add(user);
            _context.SaveChanges();

        }

        public void Put(Guid id, User user)
        {
            User userSearched = _context.Users.Find(id)!;

            if (userSearched != null)
            {
                userSearched.Name = user.Name;
                userSearched.Email = user.Email;
                userSearched.Password = user.Password;
                userSearched.Office = user.Office;
            }
            _context.Users.Update(userSearched!);
            _context.SaveChanges();
        }
    }
}
