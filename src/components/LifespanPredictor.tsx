import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner";
import { fetchLifespanPrediction } from "../service/PredictionService.ts";

// Define form schema for validation
const formSchema = z.object({
  species: z.string().min(2, {
    message: "Species name must be at least 2 characters.",
  }),
  height: z.coerce.number().positive({
    message: "Height must be a positive number.",
  }),
  weight: z.coerce.number().positive({
    message: "Weight must be a positive number.",
  }),
  gestationPeriod: z.coerce.number().positive({
    message: "Gestation period must be a positive number.",
  }),
  topSpeed: z.coerce.number().positive({
    message: "Top speed must be a positive number.",
  }),
  offspringPerBirth: z.coerce.number().positive({
    message: "Number of offspring must be a positive number.",
  }),
  diet: z.string({
    required_error: "Please select a diet type.",
  }),
  habitat: z.string({
    required_error: "Please select a habitat type.",
  }),
  socialStructure: z.string({
    required_error: "Please select a social structure.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const LifespanPredictor = () => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      species: "",
      height: undefined,
      weight: undefined,
      gestationPeriod: undefined,
      topSpeed: undefined,
      offspringPerBirth: undefined,
      diet: "",
      habitat: "",
      socialStructure: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setPrediction(null);

    try {
      // Send data to backend API
      const result = await fetchLifespanPrediction({
        height: values.height,
        weight: values.weight,
        gestationPeriod: values.gestationPeriod,
        topSpeed: values.topSpeed,
        offspringPerBirth: values.offspringPerBirth,
        diet: values.diet as "Carnivore" | "Other",
        habitat: values.habitat as "Oceans" | "Not Oceans",
        socialStructure: values.socialStructure as "Solitary" | "Group-based",
        // species: values.species,
      });

      setPrediction(result);
      toast.success("Prediction complete!");
    } catch (error) {
      console.error("Prediction error:", error);
      toast.error(
        `Failed to generate prediction: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card/70 backdrop-blur-sm border-border shadow-sm">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="species"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Species Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. African Elephant" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the common or scientific name of the species.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height (cm)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="e.g. 180"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (kg)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="e.g. 75"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="gestationPeriod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gestation Period (days)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="1"
                          placeholder="e.g. 280"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="topSpeed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Top Speed (km/h)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.1"
                          placeholder="e.g. 50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="offspringPerBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Offspring per Birth</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="1"
                        placeholder="e.g. 2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="diet"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Diet</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select diet" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Carnivore">Carnivore</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="habitat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Habitat</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select habitat" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Oceans">Oceans</SelectItem>
                          <SelectItem value="Not Oceans">Not Oceans</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="socialStructure"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Social Structure</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select structure" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Solitary">Solitary</SelectItem>
                          <SelectItem value="Group-based">
                            Group-based
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Calculating..." : "Predict Lifespan"}
              </Button>
            </form>
          </Form>

          {prediction !== null && (
            <div className="mt-8 p-4 border border-nature-200 rounded-lg bg-nature-100/50 animate-fade-in">
              <h3 className="text-lg font-medium text-nature-800 mb-2">
                Predicted Lifespan
              </h3>
              <div className="flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-nature-700">
                  {prediction}{" "}
                  <span className="text-xl font-normal">years</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                This prediction is based on available data and statistical
                models. Actual lifespans may vary based on environmental factors
                and individual circumstances.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LifespanPredictor;
