const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 gap-2 mt-12">
      {/* GITHUB */}
      <a
        href="https://github.com/COTKZA"
        target="_blank"
        className="relative bg-white p-3 rounded-full flex items-center hover:bg-white/90  hover:scale-102"
      >
        <img
          src="/image/icon/Octicons-mark-github.svg"
          className="w-10 h-10 absolute left-2"
          alt=""
        />
        <p className="text-xl text-gray-800 font-bold mx-auto">GitHub</p>
      </a>

      {/* FB */}
      <a
        href="https://www.facebook.com/COTKZA"
        target="_blank"
        className="relative bg-white p-3 rounded-full flex items-center hover:bg-white/90  hover:scale-102"
      >
        <img
          src="/image/icon/Facebook_Logo_(2019).png"
          className="w-10 h-10 absolute left-2"
          alt=""
        />
        <p className="text-xl text-gray-800 font-bold mx-auto">Facebook</p>
      </a>

      {/* IG */}
      <a
        href="https://www.instagram.com/j1rasak_2548/"
        target="_blank"
        className="relative bg-white p-3 rounded-full flex items-center hover:bg-white/90 hover:scale-102"
      >
        <img
          src="/image/icon/logo-ig.png"
          className="w-10 h-10 absolute left-2"
          alt=""
        />
        <p className="text-xl text-gray-800 font-bold mx-auto">Instagram</p>
      </a>

      {/* LINE */}
      <a
        href="https://line.me/ti/p/0ThZ9S5Sz5"
        target="_blank"
        className="relative bg-white p-3 rounded-full flex items-center hover:bg-white/90  hover:scale-102"
      >
        <img
          src="/image/icon/Logo-Line.png"
          className="w-10 h-10 absolute left-2"
          alt=""
        />
        <p className="text-xl text-gray-800 font-bold mx-auto">Line</p>
      </a>
    </div>
  );
};

export default ContactCard;
