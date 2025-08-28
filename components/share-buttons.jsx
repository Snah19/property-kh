"use client";

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon } from "react-share";

const ShareButtons = ({ propertyId, title, type }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${propertyId}`;
  return (
    <>
      <h3 className="pt-2 text-xl font-bold text-center">Share This Property</h3>
      <div className="flex justify-center gap-x-3 pb-5">
        <FacebookShareButton url={shareUrl} quote={title} hashtage={`#${type.replace(/\s/g, "")}ForRent`}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title} hashtags={[`${type.replace(/\s/g, "")}ForRent`]}>
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title} separator="::">
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} subject={title} body={`Check out this property listing: ${shareUrl}`}>
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;