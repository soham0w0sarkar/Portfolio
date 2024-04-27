import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { password } from '$env/static/private';

let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'sohamsarkar59@gmail.com',
		pass: password
	}
});

/**
 * @type {import('./$types').RequestHandler}
 * @returns {Promise<Response>}
 */
export async function POST({ request }) {
	const { name, email, message } = await request.json();
	try {
		await transporter.sendMail({
			from: email,
			to: 'sohamsarkar59@gmail.com',
			subject: `New message from ${name}`,
			text: message
		});

		return json({ message: 'Message sent' });
	} catch (/**@type {any}*/ error) {
		return json({ error: error.message });
	}
}
