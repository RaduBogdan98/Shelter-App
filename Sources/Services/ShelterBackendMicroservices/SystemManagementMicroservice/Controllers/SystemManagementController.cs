using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using SystemManagementMicroservice.Domain.Dto;
using SystemManagementMicroservice.Repository;
using AutoMapper;
using SystemManagementMicroservice.Model;
using SystemManagementMicroservice.Helpers;

namespace SystemManagementMicroservice.Controllers
{
   [Route("Admin")]
   [ApiController]
   [ApiExplorerSettings(GroupName = "admin")]
   public class SystemManagementController : ControllerBase
   {
      private readonly IAdminRepository _adminRepository;
      private readonly IMapper _systemMapper;

      public SystemManagementController(IAdminRepository adminRepository, IMapper systemMapper)
      {
         _adminRepository = adminRepository;
         _systemMapper = systemMapper;
      }

      [HttpPost("CreateRequest")]
      [ProducesResponseType(StatusCodes.Status500InternalServerError)]
      [ProducesResponseType(StatusCodes.Status200OK)]
      public async Task<IActionResult> CreateProviderRequestAsync([FromBody] ProviderRequestDto providerRequestDto)
      {
         var providerRequest = _systemMapper.Map<ProviderRequest>(providerRequestDto);

         var saved = await _adminRepository.CreateProviderRequestAsync(providerRequest);
         if (!saved)
         {
            return StatusCode((int)HttpStatusCode.InternalServerError);
         }
         return Ok();
      }

      /// <summary>
      /// Gets all the requests for becoming a provider.
      /// </summary>
      /// <returns></returns>
      [HttpGet("GetRequests")]
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
      [HttpPut("AcceptRequest/{providerRequestId}")]
      [ProducesResponseType(StatusCodes.Status404NotFound)]
      [ProducesResponseType(StatusCodes.Status500InternalServerError)]
      [ProducesResponseType(StatusCodes.Status200OK)]
      public async Task<IActionResult> AcceptProviderRequestAsync(int providerRequestId)
      {
         var providerRequest = await _adminRepository.GetProviderRequestByIdAsync(providerRequestId);
         if (providerRequest == null)
         {
            return NotFound();
         }

         ContentResult userUpdateRequestResult = await HttpUtils.Instance.RouteRequest("https://localhost:8629/Users/" + $"GiveProviderAttributesToUser/{providerRequest.OwnerId}/{providerRequest.Company}/{providerRequest.Address}", "PUT");
         if(userUpdateRequestResult.StatusCode != 200)
         {
            return userUpdateRequestResult;
         }

         var deleted = await _adminRepository.DeleteProviderRequestAsync(providerRequestId);
         if (!deleted)
         {
            return StatusCode((int)HttpStatusCode.InternalServerError);
         }

         return Ok();
      }

      /// <summary>
      /// Delete a user's request to become a provider.
      /// </summary>
      /// <param name="providerRequestId"></param>
      /// <returns></returns>
      [HttpDelete("DeleteRequest/{providerRequestId}")]
      [ProducesResponseType(StatusCodes.Status500InternalServerError)]
      [ProducesResponseType(StatusCodes.Status200OK)]
      public async Task<IActionResult> DeleteProviderRequestAsync(int providerRequestId)
      {
         var deleted = await _adminRepository.DeleteProviderRequestAsync(providerRequestId);
         if (!deleted)
         {
            return StatusCode((int)HttpStatusCode.InternalServerError);
         }
         return Ok();
      }
   }
}
