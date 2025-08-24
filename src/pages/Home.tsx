import ProfileCard from "../components/ProfileCard";
import Container from "../components/layouts/Container";
import ContactCard from "../components/ContactCard";

const Home = () => {
  return (
    <>
      <Container>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 opacity-95 p-8 rounded-2xl">
          <ProfileCard
            name="Jirasak Suktakua"
            title="Full Stack"
            handle="jirasak"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://member.bottlerefund.net/storage/profiles/2.png"
            showUserInfo={false}
            enableTilt={false}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
          <ContactCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
