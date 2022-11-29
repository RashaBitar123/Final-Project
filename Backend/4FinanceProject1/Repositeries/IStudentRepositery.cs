using _4FinanceProject1.Models;

namespace _4FinanceProject1.Repositeries
{
    public interface IStudentRepositery
    {
        Task<IEnumerable<Student>> GetAllAsync();

        Task<Student> GetAsync(Guid id);

        Task<Student> CreateStudentAsync(Student student);

        Task<Student> UpdateStudentAsync(Guid id, Student student);

        Task<Student> DeleteStudentAsync(Guid id);

        
    }
}
