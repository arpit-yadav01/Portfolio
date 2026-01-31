import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      // Using FormSubmit.co - no setup required!
      const response = await fetch("https://formsubmit.co/arpityadav170402@gmail.com", {
        method: "POST",
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="relative bg-black text-white py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "10%" }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "50%", right: "20%" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mb-4 text-lg"
        >
          Have a project in mind, a question, or just want to say hi?
          <br />
          Feel free to reach out.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a
            href="mailto:arpityadav170402@gmail.com"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors text-lg font-medium"
          >
            <span>📧</span>
            arpityadav170402@gmail.com
          </a>
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700
                         px-5 py-4 rounded-xl outline-none text-white placeholder-gray-500
                         focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20
                         transition-all duration-300"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700
                         px-5 py-4 rounded-xl outline-none text-white placeholder-gray-500
                         focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20
                         transition-all duration-300"
              />
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700
                       px-5 py-4 rounded-xl outline-none text-white placeholder-gray-500
                       focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/20
                       transition-all duration-300 resize-none"
            />
          </motion.div>

          {/* Status Message */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-green-400 text-center"
            >
              ✅ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-center"
            >
              ❌ Failed to send message. Please try again or email directly.
            </motion.div>
          )}

          <div className="text-center">
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-bold
                         px-10 py-4 rounded-full overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed
                         shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="text-xl">✈️</span>
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          
          <div className="flex justify-center gap-6">
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;