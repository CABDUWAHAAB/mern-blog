import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { UpdateBlog } from "./posts/Updateblog";

interface Blog {
  _id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  createdAt: string;
}

export const DashboardChart = () => {
  const [barChartData, setBarChartData] = useState<number[]>([]);
  const [pieChartData, setPieChartData] = useState<
    { id: number; value: number; label: string }[]
  >([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/blogs");
        const blogsData: Blog[] = response.data.data.blogs;

        // Calculate the count of each field
        const fieldCounts = {
          title: blogsData.length,
          author: blogsData.filter((blog: Blog) => blog.author).length,
          description: blogsData.filter((blog: Blog) => blog.description)
            .length,
          image: blogsData.filter((blog: Blog) => blog.image).length,
        };

        // Prepare data for the bar chart
        const barData = [
          fieldCounts.title,
          fieldCounts.author,
          fieldCounts.description,
          fieldCounts.image,
        ];

        // Prepare data for the pie chart
        const pieData = Object.entries(fieldCounts).map(
          ([key, value], index) => ({
            id: index,
            value,
            label: `Number of ${key}s`,
          })
        );

        setBarChartData(barData);
        setPieChartData(pieData);
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <article className="Dashboard__ChartBarLeft">
        <div className="Dashboard__Bart">
          <BarChart
            className="Dashboard__BartChart"
            series={[{ data: barChartData }]}
            height={290}
            width={660}
            xAxis={[
              {
                data: ["Title", "Author", "Description", "Image"], // X-axis labels
                scaleType: "band",
              },
            ]}
            margin={{ top: 30, bottom: 30, left: 30, right: 70 }}
          />
        </div>
      </article>
      <article className="Dashboard__PieCharRight">
        <PieChart
          className="Dashboard__PieChart"
          series={[
            {
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -10, color: "gray" },
              data: pieChartData,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -190,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
          height={300}
          width={450}
        />
      </article>
      <article className="Dashboard__TableCard">
        <table className="Dashboard__Table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Image</th>
              <th>Description</th>
              <th>Date</th>
              <th>Update post</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td>{index + 1}</td> {/* Custom sequential ID */}
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.image}</td>
                <td>{blog.description}</td>
                <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td>
                  <Link to={`/admin/posts/edit/${blog._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};
