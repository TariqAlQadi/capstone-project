import mongoose, { Schema } from "mongoose";

const tutorialSchema = new Schema({
  snippet: {
    publishedAt: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnails: {
      default: {
        url: {
          type: String,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
        height: {
          type: Number,
          required: true,
        },
      },
      medium: {
        url: {
          type: String,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
        height: {
          type: Number,
          required: true,
        },
      },
      high: {
        url: {
          type: String,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
        height: {
          type: Number,
          required: true,
        },
      },
      standard: {
        url: {
          type: String,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
        height: {
          type: Number,
          required: true,
        },
      },
      maxres: {
        url: {
          type: String,
          required: true,
        },
        width: {
          type: Number,
          required: true,
        },
        height: {
          type: Number,
          required: true,
        },
      },
    },
    position: {
      type: Number,
      required: true,
    },
    resourceId: {
      kind: {
        type: String,
        required: true,
      },
      videoId: {
        type: String,
        required: true,
      },
    },
    videoOwnerChannelTitle: {
      type: String,
      required: true,
    },
  },
  isLiked: {
    type: Array,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  isLearning: {
    type: Array,
    required: true,
  },
  mastered: {
    type: Array,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Tutorial =
  mongoose.models.Tutorial || mongoose.model("Tutorial", tutorialSchema);

export default Tutorial;
