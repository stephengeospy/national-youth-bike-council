function MailTo({ email, subject = "", body = "", children }) {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
  return (
    <a href={`mailTo: ${email}${params}`} className="hover:text-skin-accent">
      {children}
    </a>
  );
}

export default MailTo;
