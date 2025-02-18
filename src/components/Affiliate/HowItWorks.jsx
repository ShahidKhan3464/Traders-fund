import React from 'react';
import playicon from '../../images/affiliate/play03.svg';

const HowItWorks = () => {
  return (
    <div className="px-4 space-y-6 text-sm vd-box4 bg-secTheme">
      <div className="flex justify-between gap-2">
        <div className="p-2 w-[110px] rounded-full text-sm" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
          <p className="text-[#00A4E6] text-center leading-3">How it works</p>
        </div>
        <div
          className="p-2 w-[110px] flex items-center gap-1 justify-center rounded-full text-sm"
          style={{ background: 'rgba(110, 253, 235, 0.08)' }}
        >
          <img src={playicon} alt="" />
          <p className="text-[#6EFDEB] text-center leading-3 cursor-pointer">Play Video</p>
        </div>
      </div>
      <ul className="pl-5 space-y-4 text-sm list-disc ">
        <li className="font-extralight">
          <b className="font-bold">Direct Invites:</b> Secure a lucrative commission of up to 20% on the first purchases and up to 10% on all subsequent purchases made by your direct referrals.
        </li>{' '}
        <li className="font-extralight">
          <b className="font-bold">Indirect Invites:</b> Amplify your income by earning up to 10% from the commissions generated by sales from affiliates recruited by your referrals.
        </li>
      </ul>
      <div className="flex justify-between gap-2">
        <div className="p-2 w-[219px] rounded-full text-sm" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
          <p className="text-[#00A4E6] text-center leading-3">Exclusive Perks and Rewards</p>
        </div>
        <div
          className="p-2 w-[110px] flex items-center gap-1 justify-center rounded-full text-sm"
          style={{ background: 'rgba(110, 253, 235, 0.08)' }}
        >
          <img src={playicon} alt="" />
          <p className="text-[#6EFDEB] text-center leading-3 cursor-pointer">Play Video</p>
        </div>
      </div>
      <ul className="pl-5 space-y-4 text-sm list-disc ">
        <li className="font-extralight">
          <b className="font-bold">All-Expense-Paid Masterminds:</b> Stand out as a top affiliate and join the elite at mastermind events
          with world-renowned entrepreneurs, day traders, and investors.
        </li>{' '}
        <li className="font-extralight">
          <b className="font-bold">Special Prizes & Giveaways:</b> Achieve certain ranks as a top affiliate partner and unlock special
          prizes and giveaways, celebrating your success and hard work.
        </li>
      </ul>
      <div className="flex justify-between gap-2">
        <div className="p-2 w-[219px] rounded-full text-sm" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
          <p className="text-[#00A4E6] text-center leading-3">Resources for Success</p>
        </div>
        <div
          className="p-2 w-[110px] flex items-center gap-1 justify-center rounded-full text-sm"
          style={{ background: 'rgba(110, 253, 235, 0.08)' }}
        >
          <img src={playicon} alt="" />
          <p className="text-[#6EFDEB] text-center leading-3 cursor-pointer">Play Video</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-4 text-sm">
          <span>&bull; Marketing Flyers:</span>
          <div className="p-3 text-center rounded-md cursor-pointer text-[#6EFDEB]" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
            Download Marketing Flyers
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <span>&bull; Training Seminars:</span>
          <div className="p-3 text-center rounded-md cursor-pointer text-[#6EFDEB]" style={{ background: 'rgba(0, 164, 230, 0.05)' }}>
            Join Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
