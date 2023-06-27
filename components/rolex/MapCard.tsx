import Container from "deco-sites/fashion/components/ui/Container.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

export interface Link {
  href: string;
  label: string;
}

export interface Props {
  mapImage: Image;
  subtitle: string;
  title: string;
  store: string;
  fullAddress: string;
  city: string;
  state: string;
  country: string;
  time: string;
  telephone: Link;
  whatsapp: Link;
  mail: Link;
  directions: Link;
}

export default function MapCard(props: Props) {
  return (
    <Container class="w-full">
      <div class="bg-[#f7f7f7] lg:flex mx-8 my-8 lg:mx-0">
        <img class="lg:w-1/2" src={props.mapImage} alt="Rolex" />
        <div class="lg:w-1/2 text-center lg:text-left flex flex-col py-20">
          <span class="text-[#12784A] font-bold text-sm lg:mx-16">
            {props.subtitle}
          </span>
          <span class="font-rolex m-2 tracking-widest text-xl lg:mx-16">
            {props.title}
          </span>
          <span class="text-[#333333] font-light text-sm lg:text-lg lg:mx-16">
            {props.store}
          </span>
          <span class="text-[#333333] font-light text-sm lg:text-lg lg:mx-16">
            {props.fullAddress}
          </span>
          <span class="text-[#333333] font-light text-sm lg:text-lg lg:mx-16">
            {props.city}
          </span>
          <span class="text-[#333333] font-light text-sm lg:text-lg lg:mx-16">
            {props.state}
          </span>
          <span class="text-[#333333] font-light text-sm lg:text-lg lg:mx-16">
            {props.country}
          </span>
          <span class="py-4 lg:mx-16">{props.time}</span>
          <div class="flex lg:flex-col justify-evenly mx-6 lg:mx-16">
            <a class="flex pointer mx-3 my-1" href={props.telephone.href}>
              <div class="bg-white rounded-full p-4 hover:bg-[#12784A] max-w-min">
                <svg
                  height="15"
                  width="15"
                  viewBox="0 0 15 15"
                  fill="#12784a"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  alt=""
                >
                  <path d="m4.84 4.97-.08.03c.54 1.9 1.63 4.09 3.76 6.08l.16-.14c.83-.73 2.06-.88 2.75-.33l1.21 1.07c.67.54.65 1.5-.13 2.24-.42.49-3.43 3.57-7.98-3.6-4.77-7.56-1.9-9.63-.66-10.15.02-.01.04-.01.06-.02.03-.01.07-.02.1-.04.01 0 .03-.01.04-.01.18-.06.29-.08.29-.08s0 0 0 .01c.82-.15 1.49.25 1.74.92 0 0 1.13 3.4-1.26 4.02z">
                  </path>
                </svg>
              </div>
              <span class="hidden lg:flex items-center mx-2">
                {props.telephone.label}
              </span>
            </a>
            <a class="flex pointer mx-3 my-1" href={props.whatsapp.href}>
              <div class="bg-white rounded-full p-4 hover:bg-[#12784A] max-w-min">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#12784a"
                  height="15px"
                  width="15px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 308 308"
                  xmlSpace="preserve"
                >
                  <g id="XMLID_468_">
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"
                    />
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"
                    />
                  </g>
                </svg>
              </div>
              <span class="hidden lg:flex items-center mx-2">
                {props.whatsapp.label}
              </span>
            </a>
            <a class="flex pointer mx-3 my-1" href={props.mail.href}>
              <div class="bg-white rounded-full p-4 hover:bg-[#12784A] max-w-min">
                <svg
                  height="15"
                  width="15"
                  viewBox="0 0 15 15"
                  fill="#12784a"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  alt=""
                >
                  <path d="m0 1.5h15v.1l-7.4 5.7zm7.6 8-7.6-5.7v9.7h15v-9.6z">
                  </path>
                </svg>
              </div>
              <span class="hidden lg:flex items-center mx-2">
                {props.mail.label}
              </span>
            </a>
            <a class="flex pointer mx-3 my-1" href={props.directions.href}>
              <div class="bg-white rounded-full p-4 hover:bg-[#12784A] max-w-min">
                <svg
                  height="15"
                  width="15"
                  viewBox="0 0 15 15"
                  fill="#12784a"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  alt=""
                >
                  <path d="m9.5 10.6v-3.9h-7.5v8.3h-2v-8.6c0-.4 0-.9.4-1.3.2-.2.6-.4 1-.4h.3 7.8v-3.8l5.5 4.9z">
                  </path>
                </svg>
              </div>
              <span class="hidden lg:flex items-center mx-2">
                {props.directions.label}
              </span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
