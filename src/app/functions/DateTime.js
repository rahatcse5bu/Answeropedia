export const  ReadableDateTime = ({ isoString }) => {
    const date = new Date(isoString);
    const readableDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return <span> {readableDate}</span>;
  };
