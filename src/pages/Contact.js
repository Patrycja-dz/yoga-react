import React from 'react'

function Contact() {
  return (
    <>
    <h2>Contact</h2>
		<form>
			<h3>Inquiries</h3>
			<label for="name">
				<span>Name</span>
				<input type="text" id="name" />
			</label>
			<label for="email">
				<span>Email</span>
				<input type="text" id="email" />
			</label>
			<label for="subject">
				<span>Subject</span>
				<input type="text" id="subject" />
			</label>
			<label for="message">
				<span>Message</span>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
			</label>
			<input type="submit" id="send" value="Send" />
		</form>
        </>
  )
}

export default Contact