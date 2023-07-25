const votingForm = document.getElementById("votingForm");

votingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(votingForm);
  const voteOption = formData.get("voteOption");

  try {
    const response = await fetch("/api/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ voteOption }),
    });

    if (response.ok) {
      alert("Vote submitted successfully!");
    } else {
      alert("Failed to submit vote.");
    }
  } catch (error) {
    console.error("Error submitting vote:", error);
    alert("Error submitting vote. Please try again later.");
  }
});
