using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SystemManagementMicroservice.Domain.Dto;
using SystemManagementMicroservice.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace SystemManagementMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SystemManagementController : ControllerBase
    {
        private readonly IAdminRepository _adminRepository;
        private readonly IMapper _systemMapper;

        public SystemManagementController(IAdminRepository adminRepository, IMapper systemMapper)
        {
            _adminRepository = adminRepository;
            _systemMapper = systemMapper;
        }
        
        /// <summary>
        /// Gets all the requests for becoming a provider.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ProviderRequestDto>))]
        public async Task<IActionResult> GetAllProviderRequestsAsync()
        {
            var providerRequests = await _adminRepository.GetAllProviderRequestsAsync();
            var providerRequestsDto = providerRequests.Select(request => _systemMapper.Map<ProviderRequestDto>(request)).ToList();

            return Ok(providerRequestsDto);
        }

        /// <summary>
        /// Accept a user's request to become provider.
        /// </summary>
        /// <param name="providerRequestId">The id of the user request</param>
        /// <returns></returns>
        public async Task<IActionResult> AcceptProviderRequestAsync(int providerRequestId)
        {
            var providerRequest = await _adminRepository.GetProviderRequestByIdAsync(providerRequestId);
            //give provider roles
            return Ok();
        }

        /// <summary>
        /// Delete a user's request to become a provider.
        /// </summary>
        /// <param name="providerRequestId"></param>
        /// <returns></returns>
        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteProviderRequestAsync(int providerRequestId)
        {
            await _adminRepository.DeleteProviderRequestAsync(providerRequestId);
            return Ok();
        }
    }
}
