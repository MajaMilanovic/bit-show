class Show {
    constructor(show) {
        this.id = show.id;
        this.name = show.name;
        this.mediumImage = show.image.medium;
        this.originalImage = show.image.original;
        this.summary = show.summary;
    }
}

export  {Show};