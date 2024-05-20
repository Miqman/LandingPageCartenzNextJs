import {
  Typography,
  Button,
  Input,
  IconButton,
} from "@material-tailwind/react";

const LINKS = [
  {
    title: "PRODUK",
    items: ["Smartgov", "EFD", "Citigov", "Konsultan"],
  },
  {
    title: "INFORMASI",
    items: ["Tentang Kami", "Kebijakan Privasi", "Artikel", "Hubungi Kami"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container flex flex-col mx-auto border-t border-blue-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full lg:mt-10 gap-x-10">
          <div className="col mb-5">
            <img src="/image/logo-footer-cartenz.svg" alt="" />
            <Typography className="font-normal mb-4 mt-8 text-base">
              Millennium Centennial Center, Lantai 51 Jl. Jenderal Sudirman
              No.Kav. 25, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta, 12920
            </Typography>
            {/* <Typography variant="small" className="font-medium mb-2 text-left">
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                button
              </Button>
            </div> */}
          </div>

          <div className="col mb-10">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Ikuti Kami
            </Typography>
            <div className="flex gap-4">
              {/* @ts-ignore */}
              <IconButton color="blue">
                <i className="fa-brands fa-square-facebook text-lg" />
              </IconButton>
              {/* @ts-ignore */}
              <IconButton color="blue">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
              {/* @ts-ignore */}
              <IconButton color="blue">
                <i className="fa-brands fa-tiktok text-lg" />
              </IconButton>
              {/* @ts-ignore */}
              <IconButton color="blue">
                <i className="fa-brands fa-twitter"></i>
              </IconButton>
              {/* @ts-ignore */}
              <IconButton color="red">
                <i className="fa-brands fa-youtube text-lg" />
              </IconButton>
            </div>
          </div>

          <div className="flex col items-center gap-5 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-4"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          &copy; © Copyright 2024 PT Cartenz Technology Indonesia All rights
          reserved.
          {/* <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a> */}
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
