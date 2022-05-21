using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
