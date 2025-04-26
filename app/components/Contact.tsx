"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import axios, { AxiosError } from "axios";
// import { ApiResponse } from "@/types/project";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { footerVariants } from "@/utils/motion";
import Title from "./Title";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isEmailSending, setIsEmailSending] = useState<boolean>(false);

  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const sendEmailMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!validateEmail(email)) {
    //   toast.error("Please enter a valid email address.");
    //   return;
    // }

    // setIsEmailSending(true);
    console.log("reached before request");

    try {
      const response = await axios.post("/api/send-email", {
        email,
        message,
      });
      console.log(response);

      if (response.data.success) {
        toast.success(response.data.message);
        setEmail("");
        setMessage("");
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err);

      const error = err as AxiosError;
      toast.error(error.message);
    } finally {
      setIsEmailSending(false);
    }
  };
  const handleClick = () => {
    window.open(
      "https://cal.com/sushans-londhe/15min?overlayCalendar=true",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={footerVariants}
      className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-6 pb-8"
    >
      <Title title="Get in Touch" />

      <div className={`w-full flex flex-col gap-3 mt-6 px-36 max-sm:px-4 `}>
        <div>
          <h2 className="text-lg max-sm:text-base">
            Have a Question? Let&apos;s Chat!
          </h2>
        </div>
        <div className="flex gap-3 mt-2">
          {/* <Link href="https://cal.com/fardeen26/15min" target="_blank">
                        <button className='bg-[#4ADE80] text-black py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#42bc6f]'>
                            <SiLivechat className='h-[18px] w-[18px]' /> Book a meet
                        </button>
                    </Link> */}
          <div>
            <button
              onClick={handleClick}
              className="bg-[#1D9BF0] text-white py-2 px-3 rounded-md flex items-center gap-2 text-sm max-sm:text-xs hover:bg-[#2e7bae]"
            >
              Book a meet
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg text-start max-sm:text-base">
            Reach Out via Email
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="mt-4 w-full">
            <form className="flex flex-col gap-4" onSubmit={sendEmailMessage}>
              <div className="grid w-full gap-2">
                <Label htmlFor="message">Your Email</Label>
                <Input
                  type="text"
                  className="w-full h-full border"
                  placeholder="johndoe69@xyz.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  minLength={5}
                />
              </div>
              <Button className="mt-3">
                {isEmailSending ? "Sending Message..." : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
