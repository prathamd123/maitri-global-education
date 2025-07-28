import React from 'react';

const Service = () => {
  const services = [
    {
      title: 'Airport Pickup',
      desc: 'Seamless airport pickup upon arrival.',
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTUuMjUgMTguNzVxLjMgMCAuNTI1LS4yMjVUMTYgMTh0LS4yMjUtLjUyNXQtLjUyNS0uMjI1dC0uNTI1LjIyNVQxNC41IDE4dC4yMjUuNTI1dC41MjUuMjI1bTIuNzUgMHEuMyAwIC41MjUtLjIyNVQxOC43NSAxOHQtLjIyNS0uNTI1VDE4IDE3LjI1dC0uNTI1LjIyNXQtLjIyNS41MjV0LjIyNS41MjV0LjUyNS4yMjVtMi43NSAwcS4zIDAgLjUyNS0uMjI1VDIxLjUgMTh0LS4yMjUtLjUyNXQtLjUyNS0uMjI1dC0uNTI1LjIyNVQyMCAxOHQuMjI1LjUyNXQuNTI1LjIyNU01IDIxcS0uODI1IDAtMS40MTItLjU4N1QzIDE5VjVxMC0uODI1LjU4OC0xLjQxMlQ1IDNoMTRxLjgyNSAwIDEuNDEzLjU4OFQyMSA1djVxMCAuNDI1LS4yODguNzEzVDIwIDExdC0uNzEyLS4yODhUMTkgMTBWNUg1djE0aDVxLjQyNSAwIC43MTMuMjg4VDExIDIwdC0uMjg4LjcxM1QxMCAyMXptMC0zdjFWNXY2LjA3NVYxMXptMi0ycTAgLjQyNS4yODguNzEzVDggMTdoMi4wNzVxLjQyNSAwIC43MTMtLjI4OHQuMjg3LS43MTJ0LS4yODctLjcxMnQtLjcxMy0uMjg4SDhxLS40MjUgMC0uNzEyLjI4OFQ3IDE2bTAtNHEwIC40MjUuMjg4LjcxM1Q4IDEzaDVxLjQyNSAwIC43MTMtLjI4OFQxNCAxMnQtLjI4OC0uNzEyVDEzIDExSDhxLS40MjUgMC0uNzEyLjI4OFQ3IDEybTAtNHEwIC40MjUuMjg4LjcxM1Q4IDloOHEuNDI1IDAgLjcxMy0uMjg4VDE3IDh0LS4yODgtLjcxMlQxNiA3SDhxLS40MjUgMC0uNzEyLjI4OFQ3IDhtMTEgMTVxLTIuMDc1IDAtMy41MzctMS40NjNUMTMgMTh0MS40NjMtMy41MzdUMTggMTN0My41MzggMS40NjNUMjMgMTh0LTEuNDYzIDMuNTM4VDE4IDIzIi8+PC9zdmc+',
    },
    {
      title: 'Accommodation',
      desc: 'Help finding a comfortable stay.',
      icon: '/icons/home.svg',
    },
    {
      title: 'SIM Card Setup',
      desc: 'Get connected with local mobile service.',
      icon: '/icons/sim-card.svg',
    },
    {
      title: 'Bank Account',
      desc: 'Assistance in opening a local bank account.',
      icon: '/icons/bank.svg',
    },
    {
      title: 'City Orientation',
      desc: 'Get to know the local area and transport.',
      icon: '/icons/map.svg',
    },
    {
      title: 'Emergency Help',
      desc: '24/7 student support in case of emergency.',
      icon: '/icons/support.svg',
    },
  ];

  return (
    <div className='mt-0 mb-8 px-4'>
      {/* Header Section */}
      <div className='text-center mb-6'>
        <h1 className='text-4xl md:text-6xl font-extrabold'>Our Services</h1>
        <p className='text-base md:text-lg mt-2'>
          HERE ARE THE SERVICES YOU CAN AVAIL FOR A SMALL FEE TO ENSURE A HASSLE-FREE STAY IN THIS NEW COUNTRY
        </p>
      </div>

      {/* Card Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'>
        {services.map((service, index) => (
          <div
            key={index}
            className='group flex flex-col items-center justify-center p-4 border-2 w-56 h-auto transition-all duration-300 hover:bg-[#D4AF37] hover:text-white mx-auto'
          >
            <img
              className='w-14 h-14 mb-2'
              src={service.icon}
              alt={`${service.title} icon`}
            />
            <h1 className='text-xl font-bold mb-1 group-hover:text-white'>{service.title}</h1>
            <p className='text-sm font-semibold text-center mb-3 group-hover:text-white'>
              {service.desc}
            </p>
            <button className='bg-[#EA8B07] text-white py-1 px-4 rounded hover:bg-white hover:text-[#EA8B07] transition-all'>
              Know more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
