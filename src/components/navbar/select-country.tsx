import React from "react";
import { Select, Option } from "@material-tailwind/react";
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

export function NavbarSelectCountry({ id }: { id: string }) {
  const [value, setValue] = React.useState<string | undefined>('VND');

  return (
    <Select
      // label="Select Version"
      id={id}
      variant="standard"
      value={value}
      onChange={(val) => setValue(val)}
      // className="w-20 !min-w-[50px]"
      // style={{ maxWidth: 50 }}
      containerProps={{
        className: "w-20 !min-w-[100px] !max-w-[100px]",
      }}
    >
      <Option value="VND">{getUnicodeFlagIcon('US')} VND</Option>
      <Option value="IDR">{getUnicodeFlagIcon('ID')} IDR</Option>
      <Option value="SGD">{getUnicodeFlagIcon('SG')} SGD</Option>
      <Option value="USD">{getUnicodeFlagIcon('US')} USD</Option>
      <Option value="EUR">{getUnicodeFlagIcon('EU')} EUR</Option>
    </Select>
  );
}

export default NavbarSelectCountry;
