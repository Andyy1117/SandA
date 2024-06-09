import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps ={
    message:string;
    senderEmail:string;
    senderPhone?: string; // Optional phone number property
    senderFirstName?: string; // Optional first name property
    senderLastName?: string; // Optional last name property
}

export default function ContactFormEmail({
    message,
    senderEmail,
    senderPhone,
    senderFirstName,
    senderLastName,
}: ContactFormEmailProps) {
  return (
  <html>
    <Head />
    <Preview>New message from Website</Preview>
    <Tailwind>
        <Body>
            <Container>
                <Section>
                    <Heading>
                        You received the following message from the website.
                    </Heading>
                    <Text>
                        {senderPhone && (
                            <span className="font-bold">Phone Number:</span>
                        )}
                        {senderPhone && <span> {senderPhone}</span>}
                        <br />
                        {senderFirstName && (
                            <span className="font-bold">First Name:</span>
                        )}
                        {senderFirstName && <span> {senderFirstName}</span>}
                        <br />
                        {senderLastName && (
                            <span className="font-bold">Last Name:</span>
                        )}
                        {senderLastName && <span> {senderLastName}</span>}
                        <br />
                        <br />
                        {message}
                    </Text>
                    <Hr />
                    <Text>
                        The sender&apos;s email is: {senderEmail}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </html>
  )
}
