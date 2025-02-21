import { useGetCoursesQuery } from "../../store/services/courseApi";

function Analysis() {
  const { data: courses, error, isLoading } = useGetCoursesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading courses</p>;
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses?.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Analysis