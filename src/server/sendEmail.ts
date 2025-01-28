"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/components/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}

	return true;
};

const getErrorMessage = (error: unknown): string => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Unknown error";
	}

	return message;
};

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const senderFirstName = formData.get("senderFirstName");
	const senderLastName = formData.get("senderLastName");
	const senderPhone = formData.get("senderPhone");
	const message = formData.get("message");

	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid email",
		};
	}

	if (!validateString(senderFirstName, 500)) {
		return {
			error: "Invalid First_Name",
		};
	}

	if (!validateString(senderLastName, 500)) {
		return {
			error: "Invalid Last_Name",
		};
	}

	if (!validateString(senderPhone, 500)) {
		return {
			error: "Invalid Phone Number",
		};
	}

	if (!validateString(message, 5000)) {
		return {
			error: "Invalid message",
		};
	}

	let data;
	try {
		await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "agar.avraa1117@gmail.com",
			subject: "Message from Contact form",
			reply_to: senderEmail as string,
			react : React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
				senderFirstName: senderFirstName as string,
				senderLastName: senderLastName as string,
				senderPhone: senderPhone as string,
			})
			// <ContactFormEmail
            // message={message} 
            // senderEmail={senderEmail} 
            // senderPhone={senderPhone} 
            // senderFirstName={senderFirstName} 
            // senderLastName={senderLastName}
            // />
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
