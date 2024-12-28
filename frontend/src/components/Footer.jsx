import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 px-4 mx-auto">
        <hr />
        <footer className="footer bg-pink-100 text-base-content p-10 grid grid-cols-2">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className=" flex flex-col md:flex-row space-x-2 space-y-2 items-center justify-center">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="px-4 py-3  w-[180px] md:w-full rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <button className="px-4 py-3 bg-black  w-[180px] md:w-full text-white rounded-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </>
  );
};
