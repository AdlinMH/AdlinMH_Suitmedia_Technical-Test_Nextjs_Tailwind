import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image"

import NavbarSelectCountry from "./select-country";
import Decor1 from "@/../public/image/decoration1.svg"

const NAV_MENU = [
  {
    name: "Home",
  },
  {
    name: "Category",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

interface OpenMenuT {
  open: boolean,
  type: '' | 'menu' | 'search'
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-bold text-primary-900 text-sm"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [openMenu, setOpenMenu] = React.useState<OpenMenuT>({
    open: true,
    type: '',
  });

  function handleOpen(type: OpenMenuT['type']) {
    setOpenMenu((cur) => ({
      type: type,
      open: type !== '' && cur.type === type ? !cur.open : cur.open,
    }));
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenMenu((cur) => ({ ...cur, open: false }))
    );
  }, []);

  return (
    <div className="mx-auto container pt-3 px-10 top-0 z-50 relative">
      <MTNavbar
        blurred={false}
        shadow={false}
        color="transparent"
        className="z-50 relative border-0 pr-3 py-3 pl-6 block w-full max-w-screen-2xl"
      >
        {/* Navbar :: displayed when desktop-screen */}
        <div className="flex items-center justify-between">
          {/* burger buttons */}
          <IconButton
            id="burger-button-icon"
            variant="text"
            color="gray"
            onClick={() => handleOpen('menu')}
            className="mr-auto inline-block lg:hidden"
          >
            {openMenu.open && openMenu.type === 'menu' ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>

          {/* web names */}
          <div>
            <Image
              width={100}
              height={100}
              src={'./logos/logo-monito.svg'}
              alt={'Monito'}
              className="h-full w-full object-cover scale-[1.1]"
            />
          </div>

          {/* search buttons */}
          <IconButton
            id="magify-glass-button-icon"
            variant="text"
            color="gray"
            onClick={() => handleOpen('search')}
            className="ml-auto inline-block lg:hidden"
          >
            {openMenu ? (
              <MagnifyingGlassIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <MagnifyingGlassIcon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>

          {/* nav items */}
          <ul className="ml-10 hidden items-center gap-8 lg:flex">
            {NAV_MENU.map(({ name }) => (
              <NavItem key={name}>
                {name}
              </NavItem>
            ))}
          </ul>

          {/* nav actions :: such as login button, etc */}
          <div className="hidden items-center justify-evenly gap-4 lg:flex lg:min-w-[50%]">
            {/* search input */}
            <Input id="search-input-lg" label="" placeholder="Search something here!" color="gray" className="!rounded-full shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-white" crossOrigin={undefined} aria-labelledby="search something" />

            {/* join button */}
            <Button id="join-button-lg" fullWidth className="max-w-[200px]">Join the community</Button>

            {/* language select */}
            <NavbarSelectCountry id="select-country-lg" />
          </div>
        </div>

        {/* navbar :: displayed when mobile-screen */}
        <Collapse open={openMenu.open}>
          {openMenu.type === 'menu' && (
            <div className="container mx-auto mt-3 border-t px-2 pt-4">
              {/* nav menu items */}
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name }) => (
                  <NavItem key={name}>
                    {name}
                  </NavItem>
                ))}
              </ul>

              {/* nav actions: such as login buttons, etc */}
              <div className="mt-6 mb-4 flex flex-col items-start gap-4">
                {/* join button */}
                <Button id="join-button">Join the community</Button>

                {/* language select */}
                <NavbarSelectCountry id="select-country" />
              </div>
            </div>
          )}

          {openMenu.type === 'search' && (
            <div className="container mx-auto mt-3 border-t px-2 pt-4">
              {/* nav actions: such as login buttons, etc */}
              <div className="mt-6 mb-4 flex flex-col items-start gap-4">
                {/* search input */}
                <Input id="search-input" label="" placeholder="Search something here!" color="gray" className="!rounded-full shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-white" crossOrigin={undefined} aria-labelledby="search something" />
              </div>
            </div>
          )}
        </Collapse>
      </MTNavbar>

      <Image
        // width={700}
        // height={700}
        src={Decor1}
        alt=""
        // className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
        className="absolute -top-[4em] lg:-left-[8em]"
      />
    </div>
  );
}

export default Navbar;
