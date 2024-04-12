import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'sohamsarkar59@gmail.com',
		pass: 'zvsa ulvv jmae jhgy'
	}
});

/**
 *@param {string} to
 *@param {string} subject
 *@param {string} text
 */

export const sendMail = (to, subject, text) => {
	const mailOptions = {
		from: 'sohamsarkar59@gmail.com',
		to,
		subject,
		text
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};
