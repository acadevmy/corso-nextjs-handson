import Badge from "@/components/badge";
import ChannelLink from "@/components/channel-link";
import ImageGrid from "@/components/image-grid";
import LatestBlogPosts from "@/components/latest-blog-posts";
import LatestWorks from "@/components/latest-works";
import githubLogo from "@/images/github.png";
import nextLogo from "@/images/next.svg";
import { fetchLatestPosts, fetchLatestWorks } from "@/lib/data";

export default async function Home() {
  const latestPosts = await fetchLatestPosts();
  const latestWorks = await fetchLatestWorks();

  return (
    <div>
      <div className="mb-10">
        <h1 className="mb-4">Ciao, Bevenuto nel mio Porfolio 👋</h1>
        <h2 className="mb-10">
          Proident laborum nulla dolore est laboris tempor enim non irure qui.
        </h2>

        <p>
          Sint nisi dolor commodo esse id officia aute magna ad velit elit magna
          quis.{" "}
          <Badge
            src={nextLogo}
            alt="next.js logo"
            href="https://nextjs.org"
            label="Nextj.js"
          />{" "}
          Reprehenderit sunt deserunt cupidatat velit veniam. Veniam laborum
          dolor incididunt deserunt{" "}
          <Badge
            src={githubLogo}
            alt="github logo"
            href="https://github.com"
            label="Github"
          />{" "}
          aliqua fugiat in adipisicing.
        </p>
      </div>

      <div className="mb-10">
        <ImageGrid />
      </div>

      <div className="mb-10">
        <p>
          Sint laborum aute occaecat adipisicing eiusmod sint aliqua laborum.
          Mollit commodo velit officia velit excepteur pariatur commodo esse
          commodo. Exercitation in duis non ipsum. Aliqua incididunt labore esse
          elit aliquip reprehenderit officia esse anim consequat officia.
        </p>
      </div>

      <div className="mb-10 flex gap-4">
        <ChannelLink
          src={githubLogo}
          alt="github logo"
          description="Seguimi su Github"
          href="https://github.com"
          title="@myusername"
        />
        <ChannelLink
          src={githubLogo}
          alt="github logo"
          description="Seguimi su Github"
          href="https://github.com"
          title="@myusername"
        />
      </div>

      <div className="mb-10">
        <LatestBlogPosts data={latestPosts} />
      </div>
      <LatestWorks data={latestWorks} />
    </div>
  );
}
