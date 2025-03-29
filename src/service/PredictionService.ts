interface PredictionRequest {
  height: number;
  weight: number;
  gestationPeriod: number;
  topSpeed: number;
  offspringPerBirth: number;
  diet: "Carnivore" | "Other";
  habitat: "Oceans" | "Not Oceans";
  socialStructure: "Solitary" | "Group-based";
}

// Format data for lifespan prediction model
function formatLifespanData(data: PredictionRequest) {
  return {
    Height_high: data.height,
    Weight_high: data.weight,
    GP_high: data.gestationPeriod,
    "Top Spe_high": data.topSpeed,
    OPB_high: data.offspringPerBirth,
    Diet_Carnivore: data.diet === "Carnivore" ? 1 : 0,
    Habitat_Oceans: data.habitat === "Oceans" ? 1 : 0,
    "Conservation Status_Endangered": 1, // Default value - adjust if you're tracking this
    "Social Structure_Group-based":
      data.socialStructure === "Group-based" ? 1 : 0,
  };
}

// Format data for conservation status prediction model
function formatConservationData(data: PredictionRequest) {
  return {
    "Height (cm)": data.height,
    "Weight (kg)": data.weight,
    "Gestation Period (days)": data.gestationPeriod,
    "Top Speed (km/h)": data.topSpeed,
    "Offspring per Birth": data.offspringPerBirth,
    Diet_Carnivore: data.diet === "Carnivore" ? 1 : 0,
    Habitat_Oceans: data.habitat === "Oceans" ? 1 : 0,
    "Social Structure_Group-based":
      data.socialStructure === "Group-based" ? 1 : 0,
  };
}

// export async function fetchLifespanPrediction(data: PredictionRequest): Promise<LifespanPredictionResponse> {
export async function fetchLifespanPrediction(
  data: PredictionRequest
): Promise<number> {
  try {
    // Format the data according to the lifespan model's requirements
    const formattedData = formatLifespanData(data);
    const url = `${import.meta.env.VITE_BACKEND_URL}predict/lifespan`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }
    const result = await response.json();
    return result.predicted_lifespan;
  } catch (error) {
    console.error("Error fetching lifespan prediction:", error);
    throw error;
    // Fallback prediction for development/demo purposes
    // Remove this in production when backend is ready
    // const baseLifespan = 10;
    // const weightFactor = Math.log(data.weight + 1) / 2;
    // const gestationFactor = data.gestationPeriod / 100;
    // const calculatedLifespan = baseLifespan * (1 + weightFactor) * (1 + gestationFactor);
    // const finalPrediction = Math.round(calculatedLifespan * (0.9 + Math.random() * 0.2));

    // return {
    //   prediction: finalPrediction
    // };
  }
}

export const conservationStatusMap = [
  // {
  //   status: "Least Concern",
  //   color: "bg-green-500",
  //   text: "text-green-700",
  //   description: "Species is abundant and widespread.",
  // },
  // {
  //   status: "Near Threatened",
  //   color: "bg-lime-500",
  //   text: "text-lime-700",
  //   description: "Species is close to qualifying for a threatened category.",
  // },
  // {
  //   status: "Vulnerable",
  //   color: "bg-yellow-500",
  //   text: "text-yellow-700",
  //   description: "Species is at high risk of extinction in the wild.",
  // },
  {
    status: "Not Endangered",
    color: "bg-blue-500",
    text: "text-blue-700",
    description: "Species may or may not be at risk of extinction in the wild.",
  },
  {
    status: "Endangered",
    color: "bg-orange-500",
    text: "text-orange-700",
    description: "Species is at very high risk of extinction in the wild.",
  },
  // {
  //   status: "Critically Endangered",
  //   color: "bg-red-500",
  //   text: "text-red-700",
  //   description: "Species is at extremely high risk of extinction in the wild.",
  // },
];

// export async function fetchConservationStatus(data: PredictionRequest): Promise<ConservationStatusPredictionResponse> {
export async function fetchConservationStatus(data: PredictionRequest) {
  try {
    // Format the data according to the conservation model's requirements
    const formattedData = formatConservationData(data);
    const url = `${import.meta.env.VITE_BACKEND_URL}predict/conservation`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify(formattedData),
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching conservation status:", error);
    throw error;
    // Fallback prediction for development/demo purposes
    // Remove this in production when backend is ready

    // Simple scoring based on input values
    // let score = 0;

    // Diet and habitat factors
    // if (data.diet === 'Carnivore') score += 1;
    // if (data.habitat === 'Oceans') score += 1;

    // Social structure
    // if (data.socialStructure === 'Solitary') score += 1;

    // Other factors
    // if (data.gestationPeriod > 150) score += 1;
    // if (data.offspringPerBirth < 3) score += 1;

    // Normalize score to 0-4 range
    // const normalizedScore = Math.min(Math.floor(score / 1.5), 4);

    // return conservationStatuses[normalizedScore];
  }
}
