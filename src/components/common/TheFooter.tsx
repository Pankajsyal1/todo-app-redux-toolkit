const TheFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {year} Pankaj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default TheFooter;
