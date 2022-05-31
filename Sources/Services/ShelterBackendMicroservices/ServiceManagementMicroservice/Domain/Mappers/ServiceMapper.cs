using AutoMapper;
using ServiceManagementMicroservice.Domain.Dto;
using ServiceManagementMicroservice.Model;

namespace ServiceManagementMicroservice.Domain.Mappers
{
   public class ServiceMapper : Profile
    {
        public ServiceMapper()
        {
            CreateMap<Service, ServiceDto>().ReverseMap();
        }
    }
}
