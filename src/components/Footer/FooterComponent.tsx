import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="container mx-auto my-3">
      <FooterCopyright href="/" by="ACME™" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/all-products">All Prpducts</FooterLink>
        <FooterLink href="/categories">Categories</FooterLink>
        <FooterLink href="/login">Login</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
