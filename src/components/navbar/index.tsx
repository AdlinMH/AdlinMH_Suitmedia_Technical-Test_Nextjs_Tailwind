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

type OpenMenuT = {
  open: boolean,
  type: '' | 'menu' | 'search'
}

export function Navbar() {
  // const [openMenu, setOpenMenu] = React.useState(false);
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
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          shadow={false}
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          {/* Navbar :: displayed when desktop-screen */}
          <div className="flex items-center justify-evenly">
            {/* burger buttons */}
            <IconButton
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

            {/* nav items */}
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name }) => (
                <NavItem key={name}>
                  {name}
                </NavItem>
              ))}
            </ul>

            {/* search buttons */}
            <IconButton
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

            {/* nav actions :: such as login button, etc */}
            <div className="hidden items-center gap-4 lg:flex">
              {/* search input */}
              <Input label="Search something here!" color="gray" className="!rounded-full" crossOrigin={undefined} />

              {/* join button */}
              <Button fullWidth>Join the community</Button>

              {/* language select */}
              <NavbarSelectCountry />
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
                  {/* search input */}
                  {/* <Input label="Search something here!" color="gray" className="!rounded-full" crossOrigin={undefined} /> */}

                  {/* join button */}
                  <Button>Join the community</Button>

                  {/* language select */}
                  <NavbarSelectCountry />
                </div>
              </div>
            )}

            {openMenu.type === 'search' && (
              <div className="container mx-auto mt-3 border-t px-2 pt-4">
                {/* nav actions: such as login buttons, etc */}
                <div className="mt-6 mb-4 flex flex-col items-start gap-4">
                  {/* search input */}
                  <Input label="Search something here!" color="gray" className="!rounded-full" crossOrigin={undefined} />
                </div>
              </div>
            )}
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
