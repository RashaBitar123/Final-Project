using _4FinanceProject1.Data;
using _4FinanceProject1.Models;
using Microsoft.EntityFrameworkCore;

namespace _4FinanceProject1.Repositeries
{
    public class CourseRepositery : ICourseRepositery

    {
        private readonly TMSDbContext _TMSDbContext;

        public CourseRepositery(TMSDbContext tmsDbContext)
        {
            this._TMSDbContext = tmsDbContext;
        }

        public async Task<IEnumerable<Course>> GetAllAsync()
        {
            var courses = await _TMSDbContext.Courses.ToListAsync();
            return courses;
        }

        public async Task<Course> GetAsync(Guid id)
        {
            var course = await _TMSDbContext.Courses.FirstOrDefaultAsync(t => t.Id == id);
            if (course == null)
            {
                return null;
            }
            return course;
        }

        public async Task<Course> CreateCourseAsync(Course course)
        {
            course.Id = new Guid();
            await _TMSDbContext.Courses.AddAsync(course);
            await _TMSDbContext.SaveChangesAsync();
            return course;

        }

        public async Task<Course> UpdateCourseAsync(Guid id, Course course)
        {
            var existingcourse = await _TMSDbContext.Courses.FirstOrDefaultAsync(x => x.Id == id);
            if(existingcourse == null)
            {
                return null;
            }

            existingcourse.Name = course.Name;
            existingcourse.Description = course.Description;
            existingcourse.CreditNumber = existingcourse.CreditNumber;
            await _TMSDbContext.SaveChangesAsync();

            return existingcourse;
        }

        public async Task<Course> DeleteCourseAsync(Guid id)
        {
            var course = await _TMSDbContext.Courses.FirstOrDefaultAsync(t => t.Id == id);
            if (course == null) {
                return null;
            }
            _TMSDbContext.Courses.Remove(course);  // remove does not need await
            await _TMSDbContext.SaveChangesAsync();
            return course;
        }

        
    }
}
