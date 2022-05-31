using SystemManagementMicroservice.Domain.Dto;
using SystemManagementMicroservice.Model;
using AutoMapper;

namespace SystemManagementMicroservice.Domain.Mappers
{
   public class SystemMapper : Profile
    {
        public SystemMapper()
        {
            CreateMap<ProviderRequest, ProviderRequestDto>().ReverseMap();
        }
    }
}
