using _4FinanceProject1.InputModels;
using FluentValidation;

namespace _4FinanceProject1.Validators
{
    public class UpdateStudentRequestValidator : AbstractValidator<UpdateStudentInputModel>
    {
        public UpdateStudentRequestValidator()
        { 
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.Major).NotEmpty();
        
        }
    }
}
