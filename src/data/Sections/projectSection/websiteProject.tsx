import backOffice1 from "/public/portfolio/website/taskManager/task_dashboard.png";
import backOffice2 from "/public/portfolio/website/taskManager/task_management.png";
import backOffice3 from "/public/portfolio/website/taskManager/task_create.png";
import backOffice4 from "/public/portfolio/website/taskManager/task_remove.png";

import movie_media_movie from "/public/portfolio/website/movieMedia/movie.png";
import movie_media_filter from "/public/portfolio/website/movieMedia/filter.png";
import movie_media_series from "/public/portfolio/website/movieMedia/series.png";
import RenderButton from "@/components/ItemProjectSection/RenderButton";

const back_office_images = [
  backOffice1.src,
  backOffice2.src,
  backOffice3.src,
  backOffice4.src,
];

const movie_media_images = [
  movie_media_movie.src,
  movie_media_filter.src,
  movie_media_series.src,
];

export const websiteProject = [
  {
    title: "NextJS fullStack management",
    project_name: "Task Management Fullstack",
    project_description: (
      <>
        <p className="mt-2">
          A task manager application with two main features:
        </p>
        <ul className="list-disc list-inside mt-1">
          <li>Create, update, and delete tasks and tags.</li>
          <li>A dashboard that provides a summary of tasks.</li>
        </ul>
      </>
    ),
    project_image: back_office_images,
    footer: (
      <div className="grid grid-cols-1 gap-2">
        <p className="mt-2 text-gray-500 text-center xl:text-start">
          Built with Next.js and MongoDB.
        </p>
        <div className="flex gap-2 mt-5 justify-center xl:justify-start">
          <RenderButton
            label="task Manager NextJS"
            value={"https://next-js-full-auth.vercel.app/login/"}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Responsive React project",
    project_name: "Frontend MovieMedia",
    project_description: (
      <>
        <p className="mt-2">A platform to explore movies and TV series.</p>
        <ul className="list-disc list-inside mt-1 space-y-1">
          <li>Displays new and trending movies and series.</li>
          <li>Shows scores based on real user votes.</li>
        </ul>
      </>
    ),
    project_image: movie_media_images,
    // footer: <p className="mt-2 text-gray-500">Built with reactJS.</p>,
    footer: (
      <div className="grid grid-cols-1 gap-2">
        <p className="mt-2 text-gray-500 text-center xl:text-start">
          Built with reactJS.
        </p>
        <div className="flex gap-2 mt-5 justify-center xl:justify-start">
          <RenderButton
            label="MovieMedia React JS "
            value={"https://movie-mania-plum.vercel.app/"}
          />
        </div>
      </div>
    ),
  },
];
