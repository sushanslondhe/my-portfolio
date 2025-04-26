import Link from "next/link";
import Title from "./Title";
import { GithubGraph } from "./github";

export default function GitGraph() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-8 mb-4 gap-4 max-sm:hidden">
      <Title title="GitHub Contributions" />
      <Link href={"https://github.com/sushanslondhe"} target="_blank">
        <GithubGraph
          username="sushanslondhe"
          blockMargin={2}
          colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
        />
      </Link>
    </div>
  );
}
