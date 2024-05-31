-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Test" (
    "test_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("test_id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "subject_id" SERIAL NOT NULL,
    "test_id" INTEGER NOT NULL,
    "subject_name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "Question" (
    "question_id" SERIAL NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "question_text" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("question_id")
);

-- CreateTable
CREATE TABLE "TestResult" (
    "result_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "test_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestResult_pkey" PRIMARY KEY ("result_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "User"("user_email");

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "Test"("test_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "Test"("test_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE CASCADE ON UPDATE CASCADE;
