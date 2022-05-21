﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using ServiceManagementMicroservice.Domain.Dto;
using ServiceManagementMicroservice.Model;
using ServiceManagementMicroservice.Repository;
using System.Net;
using AutoMapper;

namespace ServiceManagementMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceManagementController : ControllerBase
    {
        private readonly IServiceRepository _serviceManagementRepository;
        private readonly IMapper _serviceMapper;

        public ServiceManagementController(IServiceRepository serviceManagementRepository, IMapper serviceMapper)
        {
            _serviceManagementRepository = serviceManagementRepository;
            _serviceMapper = serviceMapper;
        }

        /// <summary>
        /// Creates a service for a provider user.
        /// </summary>
        /// <param name="serviceRequestDto">The service information</param>
        /// <returns></returns>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ServiceDto))]
        public async Task<IActionResult> CreateServiceAsync([FromBody] ServiceDto serviceRequestDto)
        {
            var serviceRequest = _serviceMapper.Map<Service>(serviceRequestDto);
            var saved = await _serviceManagementRepository.CreateServiceAsync(serviceRequest);

            if (!saved)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }

            return Ok();
        }

        /// <summary>
        /// Gets all the available services.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ServiceDto>))]
        public async Task<IActionResult> GetAllServicesAsync()
        {
            var services = await _serviceManagementRepository.GetAllServicesAsync();
            var servicesDto = services.Select(service => _serviceMapper.Map<ServiceDto>(service)).ToList();

            return Ok(servicesDto);
        }

        /// <summary>
        /// Gets all the services for a provider.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/ownedServices/{ownerId}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<ServiceDto>))]
        public async Task<IActionResult> GetServicesByOwnerIdAsync(int ownerId)
        {
            var services = await _serviceManagementRepository.GetServicesByOwnerIdAsync(ownerId);
            var servicesDto = services.Select(service => _serviceMapper.Map<ServiceDto>(service)).ToList();

            return Ok(servicesDto);
        }

        /// <summary>
        /// Gets all the services consumed by a user.
        /// </summary>
        /// <returns></returns>
        [HttpGet("/usedServices/{userId}")]
        public async Task<IActionResult> GetServicesByUserIdAsync(int userId)
        {
            var services = await _serviceManagementRepository.GetServicesByUserIdAsync(userId);
            var servicesDto = services.Select(service => _serviceMapper.Map<ServiceDto>(service)).ToList();

            return Ok(servicesDto);
        }

        /// <summary>
        /// Updates a service.
        /// </summary>
        /// <param name="serviceUpdateRequest">The service information</param>
        /// <returns></returns>
        [HttpPut]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(ServiceDto))]
        public async Task<IActionResult> UpdateServiceAsync([FromBody] ServiceDto serviceUpdateRequestDto)
        {
            var serviceUpdateRequest = _serviceMapper.Map<Service>(serviceUpdateRequestDto);
            var updated = await _serviceManagementRepository.UpdateServiceAsync(serviceUpdateRequest);

            if (!updated)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }

            return Ok();
        }

        /// <summary>
        /// Deletes a service.
        /// </summary>
        /// <param name="serviceId">The Id of the service to be deleted</param>
        /// <returns></returns>
        [HttpDelete("{serviceId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> DeleteService(int serviceId)
        {
            await _serviceManagementRepository.DeleteService(serviceId);

            return Ok();
        }
    }
}
