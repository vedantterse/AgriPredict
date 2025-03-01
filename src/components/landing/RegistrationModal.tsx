import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  phone: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface RegistrationModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmit?: (data: FormValues) => void;
}

const RegistrationModal = ({
  open = true,
  onOpenChange = () => {},
  onSubmit = (data) => console.log("Form submitted:", data),
}: RegistrationModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      agreeToTerms: false,
    },
  });

  const handleFormSubmit = async (data: FormValues) => {
    try {
      await onSubmit(data);
      reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-md w-full rounded-xl shadow-xl">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Start Your Free Trial
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-gray-400">
            Get access to AI-powered price predictions for your agricultural
            business.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-300">
              Company Name
            </Label>
            <Input
              id="company"
              placeholder="Your Company"
              {...register("company")}
              className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300">
              Phone Number
            </Label>
            <Input
              id="phone"
              placeholder="+1 (555) 123-4567"
              {...register("phone")}
              className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="agreeToTerms"
              {...register("agreeToTerms")}
              className="data-[state=checked]:bg-blue-500 border-gray-600"
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="agreeToTerms"
                className="text-sm text-gray-300 font-normal"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                >
                  terms and conditions
                </a>
                <span className="text-red-500">*</span>
              </Label>
              {errors.agreeToTerms && (
                <p className="text-sm text-red-500">
                  {errors.agreeToTerms.message}
                </p>
              )}
            </div>
          </div>

          <DialogFooter className="pt-4">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  "Start Free Trial"
                )}
              </Button>
            </motion.div>
          </DialogFooter>
        </form>

        <p className="text-xs text-center text-gray-500 mt-4">
          No credit card required. 14-day free trial.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
