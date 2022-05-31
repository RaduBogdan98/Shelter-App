using AutoMapper;
using UserManagementMicroservice.Domain.Dto;
using UserManagementMicroservice.Model;

namespace UserManagementMicroservice.Domain.Mappers
{
   public class UserMapper : Profile
    {
        public UserMapper()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, SpecializedUserDto>().ReverseMap();
        }
    }
}
